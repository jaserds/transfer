"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";

interface Country {
    id: string;
    name: string;
    imageUrl?: string;
}

export default function CountriesTable() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [newCountry, setNewCountry] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        fetch("/api/country")
            .then((res) => res.json())
            .then(setCountries)
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
        if (!newCountry || !file) return;

        const imageUrl = await uploadImage();
        if (!imageUrl) return;

        try {

            const res = await fetch("/api/country", {
                method: "POST",
                body: JSON.stringify({ name: newCountry, imageUrl }),
                headers: { "Content-Type": "application/json" },
            });
            console.log(res);

            if (!res.ok) throw new Error("Failed to add country");

            const country: Country = await res.json();
            setCountries([...countries, country]);
            setNewCountry("");
            setFile(null);
        } catch (error) {
            console.error(error);
        }
    };

    console.log(countries);


    return (
        <div className="p-4">
            <div className="flex gap-2 mb-4">
                <Input value={newCountry} onChange={(e) => setNewCountry(e.target.value)} placeholder="Название страны" />
                <Input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                <Button onClick={addCountry}>Добавить</Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Название</TableHead>
                        <TableHead>Картинка</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {countries.map((country) => (
                        <TableRow key={country.id}>
                            <TableCell>{country.id}</TableCell>
                            <TableCell>{country.name}</TableCell>
                            <TableCell>
                                {country.imageUrl && <Image src={country.imageUrl} width={50} height={50} alt={country.name} className="h-12 w-12 object-cover rounded-md" />}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}