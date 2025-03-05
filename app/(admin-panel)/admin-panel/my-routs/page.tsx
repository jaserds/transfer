"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MultiSelect from "@/components/ui/other/MultiSelect";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ITransferCars } from "@/lib/types";
import { CircleX, Minus, Trash2 } from "lucide-react";
import { useEffect, useState, } from "react";

interface ITransferCarsResponse {
    routeId: string;
    transferCarId: string;
    transferCar: ITransferCars[];
}

interface IMyRoute {
    id: string;
    imageUrl: string
    inRoute: string
    toRoute: string;
    cityId: string;
    popularRoute: boolean;
    price: number;
    pointsGoogleMap: {
        points: Array<{ lat: number, lng: number }>
    };
    description: string;
    transferCars: ITransferCarsResponse[];
}

interface INewMyRoute {
    inRoute: string
    toRoute: string;
    cityId: string;
    price: number;
    popularRoute: boolean;
    pointsGoogleMap: {
        points: Array<{ lat: number, lng: number }>
    };
    description: string;
    transferCarIds: string[];
}

interface City {
    id: string;
    name: string;
    imageUrl?: string;
    countryId: string[];
}


export default function MyRouts() {
    const [myRouts, setMyRouts] = useState<IMyRoute[]>([]);
    const [city, setCity] = useState<City[]>([]);
    const [showFormAddRoute, setShowFormAddRoute] = useState(false);
    const [dataTransferCars, setDataTransferCars] = useState<ITransferCars[]>([]);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const [multiSelectserverData, setMultiSelectserverData] = useState<ITransferCars[]>([]);
    const [dataNewRoute, setDataNewRoute] = useState<INewMyRoute>({
        inRoute: "",
        toRoute: "",
        cityId: "",
        popularRoute: false,
        price: 0,
        pointsGoogleMap: {
            points: [
                {
                    "lat": 0,
                    "lng": 0
                },
                {
                    "lat": 0,
                    "lng": 0
                }
            ]
        },
        description: "",
        transferCarIds: [],
    })

    const options = dataTransferCars.map((transferCar) => ({
        id: transferCar.id,
        name: transferCar.name,
    }));

    useEffect(() => {
        fetch("/api/city")
            .then((res) => res.json())
            .then(setCity)
            .catch(() => console.error("Failed to fetch countries"));

        fetch("/api/my-routs")
            .then((res) => res.json())
            .then(setMyRouts)
            .catch(() => console.error("Failed to fetch countries"));

        fetch("/api/transfer-cars")
            .then((res) => res.json())
            .then((data) => {
                setDataTransferCars(data)
                console.log(data);
            })
            .catch(() => console.error("Failed to fetch countries"))
    }, []);

    const handleSelectionChange = (selected: string[]) => {
        setSelectedIds(selected);
        setDataNewRoute({ ...dataNewRoute, transferCarIds: selected });
    };

    const uploadImage = async (): Promise<string | null> => {
        if (!file) return null;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Image upload failed");

            const data = await res.json();
            return data.imageUrl;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const handleResetDataNewRoute = () => {
        setDataNewRoute({
            inRoute: "",
            toRoute: "",
            cityId: "",
            price: 0,
            popularRoute: false,
            pointsGoogleMap: {
                points: [
                    {
                        "lat": 0,
                        "lng": 0
                    },
                    {
                        "lat": 0,
                        "lng": 0
                    }
                ]
            },
            description: "",
            transferCarIds: [],
        }

        )
    }

    const addRoute = async () => {
        if (!city || !file || !dataNewRoute.cityId || !dataNewRoute.inRoute || !dataNewRoute.toRoute || !selectedIds) return;
        const imageUrl = await uploadImage();
        if (!imageUrl) return;
        console.log(dataNewRoute);


        try {
            const res = await fetch("/api/my-routs", {
                method: "POST",
                body: JSON.stringify({
                    ...dataNewRoute,
                    pointsGoogleMap: JSON.stringify(dataNewRoute.pointsGoogleMap),
                    imageUrl,
                    transferCarIds: dataNewRoute.transferCarIds
                }),
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) throw new Error("Failed to add new-route");

            const newRoute: IMyRoute = await res.json();
            setMyRouts([...myRouts, newRoute]);
            handleResetDataNewRoute()
            setFile(null);
            setShowFormAddRoute(false)
        } catch (error) {
            console.error(error);
        }
    };


    const deleteRoute = async (id: string) => {
        try {
            const res = await fetch(`/api/my-routs/${id}`, { method: "DELETE" });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to delete route");
            }

            setMyRouts(myRouts.filter((myRoute) => myRoute.id !== id));
        } catch (error) {
            console.error("Error deleting country:", error);
        }
    };

    const updatePopularRoute = async (id: string, popularRoute: boolean) => {
        try {
            const res = await fetch(`/api/my-routs/${id}/set-popular-route`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ popularRoute }),
            });

            if (!res.ok) {
                throw new Error("Failed to update");
            }

            const updatedRoute = await res.json();
            setMyRouts(myRouts.map((myRoute) => (myRoute.id === id ? updatedRoute : myRoute)));
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <div className="p-4">
            <div className="mb-3 text-[#373F47] font-bold">Добавить маршрут</div>
            <Button className="mb-8" onClick={() => { setShowFormAddRoute(true) }}>Добавить</Button>
            {
                showFormAddRoute &&
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#00000085] z-20 flex justify-center items-center">
                    <div className="z-30 bg-white p-4 max-w-[450px] max-h-[500px] rounded-[10px] flex flex-col gap-4 pb-16 overflow-y-auto custom-scroll">
                        <button onClick={() => {
                            handleResetDataNewRoute()
                            setFile(null)
                            setShowFormAddRoute(false)
                        }} className="cursor-pointer text-[#f02f2f] self-end"><CircleX /></button>
                        <div className="mb-3 text-[#373F47] font-bold self-center">Добавить новый маршрут</div>
                        <Select onValueChange={(value) => setDataNewRoute(prev => ({ ...prev, cityId: value }))}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Укажите город" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    city.map((city) => (
                                        <SelectItem key={city.id} value={city.id}>{city.name}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                        <Input onChange={(e) => setDataNewRoute(prev => ({ ...prev, inRoute: e.target.value }))} id="inRoute" type='text' className="" placeholder="От куда" />
                        <Input onChange={(e) => setDataNewRoute(prev => ({ ...prev, toRoute: e.target.value }))} id="toRoute" type='text' className="" placeholder="Куда" />
                        <Input onChange={(e) => setDataNewRoute(prev => ({ ...prev, price: Number(e.target.value) }))} id="price" type='text' className="" placeholder="Цена" />
                        <div className=" flex flex-col gap-4 mt-3">
                            <p className="text-[#373F47] font-bold text-center">Точки маршрута для Googl карты</p>
                            <div className="flex gap-4">
                                <Input
                                    onChange={(e) =>
                                        setDataNewRoute(prev => ({
                                            ...prev,
                                            pointsGoogleMap: {
                                                ...prev.pointsGoogleMap,
                                                points: prev.pointsGoogleMap.points.map((point, index) =>
                                                    index === 0 ? { ...point, lat: parseFloat(e.target.value) || 0 } : point
                                                )
                                            }
                                        }))
                                    } id="lat1" type='text' className="" placeholder="lat1 - точка маршрута" />
                                <Input
                                    onChange={(e) =>
                                        setDataNewRoute(prev => ({
                                            ...prev,
                                            pointsGoogleMap: {
                                                ...prev.pointsGoogleMap,
                                                points: prev.pointsGoogleMap.points.map((point, index) =>
                                                    index === 0 ? { ...point, lng: parseFloat(e.target.value) || 0 } : point
                                                )
                                            }
                                        }))
                                    } id="lng1" type='text' className="" placeholder="lng1 - точка маршрута" />
                            </div>
                            <div className="flex gap-4">
                                <Input
                                    onChange={(e) =>
                                        setDataNewRoute(prev => ({
                                            ...prev,
                                            pointsGoogleMap: {
                                                ...prev.pointsGoogleMap,
                                                points: prev.pointsGoogleMap.points.map((point, index) =>
                                                    index === 1 ? { ...point, lat: parseFloat(e.target.value) || 0 } : point
                                                )
                                            }
                                        }))
                                    } id="lat2" type='text' className="" placeholder="lat2 - точка маршрута" />
                                <Input
                                    onChange={(e) =>
                                        setDataNewRoute(prev => ({
                                            ...prev,
                                            pointsGoogleMap: {
                                                ...prev.pointsGoogleMap,
                                                points: prev.pointsGoogleMap.points.map((point, index) =>
                                                    index === 1 ? { ...point, lng: parseFloat(e.target.value) || 0 } : point
                                                )
                                            }
                                        }))
                                    } id="lng2" type='text' className="" placeholder="lng2 - точка маршрута" />
                            </div>
                        </div>
                        <p className="text-[#373F47] font-bold text-center mt-3">Описание маршрута</p>
                        <Textarea onChange={(e) => setDataNewRoute(prev => ({ ...prev, description: e.target.value }))} placeholder="Введите описание маршрута" />
                        <p className="text-[#373F47] font-bold text-center mt-3">Фото для стрицы</p>
                        <Input className="cursor-pointer" type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                        <p className="text-[#373F47] font-bold text-center mt-3">Авто</p>
                        <MultiSelect options={options} onSelectionChange={handleSelectionChange} />
                        <Button className="mt-3" onClick={() => { addRoute() }}>Сохранить маршрут</Button>
                    </div>

                </div>
            }
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="px-6">От куда</TableHead>
                        <TableHead className="px-6"></TableHead>
                        <TableHead className="px-6">Куда</TableHead>
                        <TableHead className="px-6">Город</TableHead>
                        <TableHead className="px-6">Популярный маршрут?</TableHead>
                        <TableHead className="px-6">Классы авто</TableHead>
                        <TableHead className="px-6"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {myRouts.map((myRoute: IMyRoute) => (
                        <TableRow key={myRoute.id}>
                            <TableCell className="px-6">{myRoute.inRoute}</TableCell>
                            <TableCell className="px-6"><Minus className="text-[#c0c0c0]" strokeWidth={1} /></TableCell>
                            <TableCell className="px-6">{myRoute.toRoute}</TableCell>
                            <TableCell className="px-6">
                                {myRoute.cityId && city.find((city) => city.id === myRoute.cityId)?.name}
                            </TableCell>
                            <TableCell className="flex justify-center px-6">
                                {myRoute.popularRoute ?
                                    <div className="cursor-pointer" onClick={() => updatePopularRoute(myRoute.id, !myRoute.popularRoute)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFE6B8" stroke="#F9AC1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>
                                    </div>
                                    :
                                    <div className="cursor-pointer" onClick={() => updatePopularRoute(myRoute.id, !myRoute.popularRoute)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C7C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star hover:fill-[#FFE6B8] hover:stroke-[#F9AC1A]"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>
                                    </div>
                                }
                            </TableCell>
                            <TableCell className="px-6">
                                <MultiSelect options={options} onSelectionChange={handleSelectionChange} />
                            </TableCell>
                            <TableCell className="px-6">
                                <Trash2 onClick={() => { deleteRoute(myRoute.id) }} className="cursor-pointer text-[#6C7C8C] hover:text-rose-500" />
                            </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}