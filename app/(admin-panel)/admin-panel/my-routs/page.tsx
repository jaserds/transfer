"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CircleX, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, } from "react";

interface IMyRoute {
    id: string;
    imageUrl: string
    inRoute: string
    toRoute: string;
    cityId: string;
    popularRoute: boolean;
    pointsGoogleMap: JSON;
    description: string
}

interface City {
    id: string;
    name: string;
    imageUrl?: string;
    countryId: string;
}


export default function MyRouts() {
    const [myRouts, setMyRouts] = useState<IMyRoute[]>([]);
    const [city, setCity] = useState<City[]>([]);
    const [showFormAddRoute, setShowFormAddRoute] = useState(false);
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    useEffect(() => {
        console.log(selectedCity);

    }, [selectedCity])


    useEffect(() => {
        fetch("/api/city")
            .then((res) => res.json())
            .then(setCity)
            .catch(() => console.error("Failed to fetch countries"));

        fetch("/api/my-routs")
            .then((res) => res.json())
            .then(setMyRouts)
            .catch(() => console.error("Failed to fetch countries"));

    }, []);

    // const uploadImage = async (): Promise<string | null> => {
    //     if (!file) return null;

    //     const formData = new FormData();
    //     formData.append("file", file);

    //     try {
    //         const res = await fetch("/api/upload", {
    //             method: "POST",
    //             body: formData,
    //         });

    //         if (!res.ok) throw new Error("Image upload failed");

    //         const data = await res.json();
    //         return data.imageUrl;
    //     } catch (error) {
    //         console.error(error);
    //         return null;
    //     }
    // };

    // const addRoute = async () => {
    //     if (!city || !file || !selectedCountry) return;

    //     const imageUrl = await uploadImage();
    //     if (!imageUrl) return;

    //     try {

    //         const res = await fetch("/api/city", {
    //             method: "POST",
    //             body: JSON.stringify({ name: newCity, imageUrl, countryId: selectedCountry }),
    //             headers: { "Content-Type": "application/json" },
    //         });

    //         if (!res.ok) throw new Error("Failed to add country");

    //         const country: City = await res.json();
    //         setCity([...city, country]);
    //         setNewCity("");
    //         setFile(null);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };


    // const deleteRoute = async (id: string) => {
    //     try {
    //         const res = await fetch(`/api/city/${id}`, { method: "DELETE" });

    //         if (!res.ok) {
    //             const errorData = await res.json();
    //             throw new Error(errorData.error || "Failed to delete country");
    //         }

    //         setCity(city.filter((ci) => ci.id !== id));
    //     } catch (error) {
    //         console.error("Error deleting country:", error);
    //     }
    // };



    return (
        <div className="p-4">
            <div className="mb-3 text-[#373F47] font-bold">Добьавить маршрут</div>
            <Button onClick={() => { setShowFormAddRoute(true) }}>Добавить</Button>
            {
                showFormAddRoute &&
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#00000085] z-20 flex justify-center items-center">
                    <div className="z-30 bg-white p-4 w-[400px] rounded-[10px] flex flex-col gap-4 pb-16">
                        <button onClick={() => { setShowFormAddRoute(false) }} className="cursor-pointer text-[#f02f2f] self-end"><CircleX /></button>
                        <div className="mb-3 text-[#373F47] font-bold self-center">Добавить новый маршрут</div>
                        <Select onValueChange={setSelectedCity}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Выбирите страну" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    city.map((city) => (
                                        <SelectItem key={city.id} value={city.id}>{city.name}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>

                </div>
            }
            <div className="flex gap-2 mb-4">
                {/* <Input value={newCity} onChange={(e) => setNewCity(e.target.value)} placeholder="Название города" />
                <Input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                <Select onValueChange={setSelectedCountry}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Выбирите страну" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            countries.map((country) => (
                                <SelectItem key={country.id} value={country.id}>{country.name}</SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>*/}
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>От куда</TableHead>
                        <TableHead>Куда</TableHead>
                        <TableHead></TableHead>
                        <TableHead>Город</TableHead>
                        <TableHead>Популярный маршрут?</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {myRouts.map((myRoute: IMyRoute) => (
                        <TableRow key={myRoute.id}>
                            <TableCell>{myRoute.inRoute}</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>{myRoute.toRoute}</TableCell>
                            <TableCell>
                                {myRoute.cityId && city.find((city) => city.id === myRoute.cityId)?.name}
                            </TableCell>
                            <TableCell className="flex justify-center">
                                {myRoute.popularRoute ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFE6B8" stroke="#F9AC1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C7C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star hover:fill-[#FFE6B8] hover:stroke-[#F9AC1A]"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>
                                }
                            </TableCell>
                            <TableCell>
                                <Trash2 onClick={() => { }} className="cursor-pointer text-[#6C7C8C] hover:text-rose-500" />
                            </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}