"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Country {
    id: string;
    name: string;
    imageUrl?: string;
}

export default function Countries() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [newCountry, setNewCountry] = useState<string>("");
    const [newCountryEn, setNewCountryEn] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetch("/api/country")
            .then((res) => res.json())
            .then((countries) => {
                setCountries(countries)
                setIsLoading(false)
            })
            .catch(() => console.error("Failed to fetch countries"));
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

    const addCountry = async () => {
        if (!newCountry || !newCountryEn || !file) return;

        const imageUrl = await uploadImage();
        if (!imageUrl) return;

        try {

            const res = await fetch("/api/country", {
                method: "POST",
                body: JSON.stringify({ name: newCountry, nameEn: newCountryEn, imageUrl }),
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) throw new Error("Failed to add country");

            const country: Country = await res.json();
            setCountries([...countries, country]);
            setNewCountry("");
            setNewCountryEn("");
            setFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = ""; // Очистка инпута
            }
        } catch (error) {
            console.error(error);
        }
    };


    const deleteCountry = async (id: string) => {
        try {
            const res = await fetch(`/api/country/${id}`, { method: "DELETE" });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to delete country");
            }

            setCountries(countries.filter((country) => country.id !== id));
        } catch (error) {
            console.error("Error deleting country:", error);
        }
    };

    return (
        <div className="p-4">
            <div className="mb-3 text-[#373F47] font-bold">Добьавить страну</div>
            <div className="flex gap-2 mb-4">
                <Input value={newCountry} onChange={(e) => setNewCountry(e.target.value)} placeholder="Название страны" />
                <Input value={newCountryEn} onChange={(e) => setNewCountryEn(e.target.value)} placeholder="Название страны En" />
                <Input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} ref={fileInputRef} />
                <Button onClick={addCountry}>Добавить</Button>
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

                        countries.map((country) => (
                            <TableRow key={country.id}>
                                <TableCell>{country.name}</TableCell>
                                <TableCell>
                                    {country.imageUrl && <Image src={country.imageUrl} width={100} height={100} alt={country.name} className="max-h-[100px] max-w-[100px] object-contain rounded-md" />}
                                </TableCell>
                                <TableCell>
                                    <Trash2 onClick={() => deleteCountry(country.id)} className="cursor-pointer text-[#6C7C8C] hover:text-rose-500" />
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}