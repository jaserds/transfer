"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ITransferCars } from "@/lib/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface IDataTransferCars {
    name: string;
    imageUrl: string;
    cars: string;
    qtyPerson: number;
    qtyBags: number;
    price: number;
}

export default function TransferCars() {
    const [isLoading, setIsLoading] = useState(true);
    const [newTransferCars, setNewTransferCars] = useState<IDataTransferCars>({
        name: "",
        imageUrl: "",
        cars: "",
        qtyPerson: 0,
        qtyBags: 0,
        price: 0,
    });
    const [dataTransferCars, setDataTransferCars] = useState<ITransferCars[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        fetch("/api/transfer-cars")
            .then((res) => res.json())
            .then(setDataTransferCars)
            .catch(() => console.error("Failed to fetch countries"))
            .finally(() => setIsLoading(false));
    }, []);


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

    const addNewTransferCar = async () => {
        if (!file || !newTransferCars) return;

        const imageUrl = await uploadImage();
        if (!imageUrl) return;

        try {
            const res = await fetch("/api/my-routs", {
                method: "POST",
                body: JSON.stringify({
                    ...newTransferCars,
                }),
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) throw new Error("Failed to add new-route");

            const newCar: ITransferCars = await res.json();
            setDataTransferCars([...dataTransferCars, newCar]);
            setFile(null);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="p-4">
            <div className="mb-3 text-[#373F47] font-bold">Добьавить страну</div>
            <div className="flex gap-2 mb-4">
                <Input type="text" value={newTransferCars?.name || ""}
                    onChange={(e) => setNewTransferCars((prev) => ({
                        ...prev,
                        name: e.target.value,
                    }))} placeholder="Например Эконом, Бизнес" />
                <Input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} ref={fileInputRef} />
                <Input type="number" placeholder="Цена" value={newTransferCars?.price ?? ""}
                    onChange={(e) => setNewTransferCars((prev) => ({
                        ...prev,
                        price: Number(e.target.value) || 0,
                    }))} />
                <Input type="text" placeholder="Модели авто через запятую" value={newTransferCars?.cars ?? ""}
                    onChange={(e) => setNewTransferCars((prev) => ({
                        ...prev,
                        cars: e.target.value || "",
                    }))} />
                <Input type="number" placeholder="Количество пассажиров" value={newTransferCars?.qtyPerson ?? ""} onChange={
                    (e) => setNewTransferCars((prev) => ({
                        ...prev,
                        qtyPerson: Number(e.target.value) || 0,
                    }))
                } />
                <Input type="number" placeholder="Количество багажа" value={newTransferCars?.qtyBags ?? ""} onChange={
                    (e) => setNewTransferCars((prev) => ({
                        ...prev,
                        qtyBags: Number(e.target.value) || 0,
                    }))
                } />
                <Button onClick={() => { addNewTransferCar() }}>Добавить</Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Название</TableHead>
                        <TableHead>Картинка</TableHead>
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
                                    {/* <Trash2 onClick={() => deleteCountry(country.id)} className="cursor-pointer text-[#6C7C8C] hover:text-rose-500" /> */}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}