"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ButtonSpinner from "@/components/ui/loaders/ButtonSpinner";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CircleX, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface IDataTransferCars {
    name: string;
    nameEn: string;
    nameFr: string;
    imageUrl: string;
    cars: string;
    qtyPerson: number;
    qtyBags: number;
    price: number;
}

export interface ITransferCars {
    id: string;
    name: string;
    imageUrl: string;
    cars: string;
    qtyPerson: number;
    qtyBags: number;
    price: number;
    TransferCarsTranslation: { name: string }[]
}

export default function TransferCars() {
    const [isSetLoading, setIsSetLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [newTransferCars, setNewTransferCars] = useState<IDataTransferCars>({
        name: "",
        nameEn: "",
        nameFr: "",
        imageUrl: "",
        cars: "",
        qtyPerson: 0,
        qtyBags: 0,
        price: 0,
    });
    const [showModal, setShowModal] = useState(false);
    const [dataTransferCars, setDataTransferCars] = useState<ITransferCars[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/transfer-cars`)
            .then((res) => res.json())
            .then((data) => {
                setDataTransferCars(data)
            })
            .catch(() => console.error("Failed to fetch countries"))
            .finally(() => setIsLoading(false));

    }, []);


    const uploadImage = async (): Promise<string | null> => {
        if (!file) return null;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
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

    const addNewTransferCar = async () => {
        setIsSetLoading(true)
        if (!file || !newTransferCars) return;

        const imageUrl = await uploadImage();
        if (!imageUrl) return;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transfer-cars`, {
                method: "POST",
                body: JSON.stringify({
                    ...newTransferCars,
                    imageUrl,
                }),
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) throw new Error("Failed to add new-route");

            const newCar: ITransferCars = await res.json();
            setDataTransferCars([...dataTransferCars, newCar]);
            setFile(null);
            setNewTransferCars({ name: "", nameEn: "", nameFr: "", imageUrl: "", cars: "", qtyPerson: 0, qtyBags: 0, price: 0 });
            setShowModal(false);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSetLoading(false)
        }
    };

    const deleteTransferCat = async (id: string) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transfer-cars/${id}`, { method: "DELETE" });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to delete route");
            }

            setDataTransferCars(dataTransferCars.filter((transferCar) => transferCar.id !== id));
        } catch (error) {
            console.error("Error deleting country:", error);
        }
    };


    return (
        <div className="p-4">
            <div className="mb-3 text-[#373F47] font-bold">Добавить авто</div>
            {showModal &&
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#00000085] z-20 flex justify-center items-center">
                    <div className="z-30 bg-white p-4 max-w-[450px] max-h-[500px] rounded-[10px] flex flex-col gap-4 pb-16 overflow-y-auto custom-scroll">
                        <button onClick={() => {
                            setNewTransferCars({ name: "", nameEn: "", nameFr: "", imageUrl: "", cars: "", qtyPerson: 0, qtyBags: 0, price: 0 });
                            setFile(null)
                            setShowModal(false)
                        }} className="cursor-pointer text-[#f02f2f] self-end"><CircleX /></button>
                        <div className="mb-3 text-[#373F47] font-bold self-center">Добавить новое авто</div>
                        <div className="flex flex-col gap-2 mb-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="">Название</label>
                                <Input required id="name" type="text" value={newTransferCars?.name || ""}
                                    onChange={(e) => setNewTransferCars((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))} placeholder="Например Эконом, Бизнес" />
                                <Input required id="name" type="text" value={newTransferCars?.nameEn || ""}
                                    onChange={(e) => setNewTransferCars((prev) => ({
                                        ...prev,
                                        nameEn: e.target.value,
                                    }))} placeholder="Например Economy, Business" />
                                <Input required id="name" type="text" value={newTransferCars?.nameFr || ""}
                                    onChange={(e) => setNewTransferCars((prev) => ({
                                        ...prev,
                                        nameFr: e.target.value,
                                    }))} placeholder="Например Économie, Affaires" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="">Картинка</label>
                                <Input required type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} ref={fileInputRef} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="">Цена</label>
                                <Input required type="number" placeholder="Цена" value={newTransferCars?.price ?? ""}
                                    onChange={(e) => setNewTransferCars((prev) => ({
                                        ...prev,
                                        price: Number(e.target.value) || 0,
                                    }))} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="">Модели</label>
                                <Input required type="text" placeholder="Модели авто через запятую" value={newTransferCars?.cars ?? ""}
                                    onChange={(e) => setNewTransferCars((prev) => ({
                                        ...prev,
                                        cars: e.target.value || "",
                                    }))} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="">Число пассажиров</label>
                                <Input required type="number" placeholder="Количество пассажиров" value={newTransferCars?.qtyPerson ?? ""} onChange={
                                    (e) => setNewTransferCars((prev) => ({
                                        ...prev,
                                        qtyPerson: Number(e.target.value) || 0,
                                    }))
                                } />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="">Количество багажа</label>
                                <Input required type="number" placeholder="Количество багажа" value={newTransferCars?.qtyBags ?? ""} onChange={
                                    (e) => setNewTransferCars((prev) => ({
                                        ...prev,
                                        qtyBags: Number(e.target.value) || 0,
                                    }))
                                } />
                            </div>
                            <Button className="self-center mt-5" onClick={() => { addNewTransferCar() }}>{isSetLoading ? <ButtonSpinner /> : "Добавить"}</Button>
                        </div>
                    </div>
                </div>}

            <Button className="mb-10" onClick={() => { setShowModal(true) }}>Добавить новое авто</Button>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Название</TableHead>
                        <TableHead>Картинка</TableHead>
                        <TableHead>Модели</TableHead>
                        <TableHead>Число пассажиров</TableHead>
                        <TableHead>Количество багажа</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {isLoading ? (
                        <>
                            <TableRow >
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[200px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[50px] w-[50px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[150px]" />
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[200px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[50px] w-[50px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[150px]" />
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[200px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[50px] w-[50px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[150px]" />
                                </TableCell>
                            </TableRow>
                        </>
                    ) : (
                        dataTransferCars.map((transferCars) => (
                            <TableRow key={transferCars.id}>
                                <TableCell>{transferCars.name}</TableCell>
                                <TableCell>
                                    {transferCars.imageUrl && <Image src={transferCars.imageUrl} width={100} height={100} alt={transferCars.name} className="max-h-[100px] max-w-[100px] object-contain rounded-md" />}
                                </TableCell>
                                <TableCell>
                                    {transferCars.cars}
                                </TableCell>
                                <TableCell>
                                    {transferCars.qtyPerson}
                                </TableCell>
                                <TableCell>
                                    {transferCars.qtyBags}
                                </TableCell>
                                <TableCell>
                                    <Trash2 onClick={() => { deleteTransferCat(transferCars.id); }} className="cursor-pointer text-[#6C7C8C] hover:text-rose-500" />
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}