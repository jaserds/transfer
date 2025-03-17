"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";



interface City {
    id: string;
    name: string;
    imageUrl?: string;
    countryId: string;
}

interface Country {
    id: string;
    name: string;
    imageUrl?: string;
    translation: { name: string; locale: string }[];
}

export default function City() {
    const [city, setCity] = useState<City[]>([]);
    const [countries, setCountries] = useState<Country[]>([]);
    const [newCity, setNewCity] = useState<string>("");
    const [newCityEn, setNewCityEn] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/city`)
            .then((res) => res.json())
            .then(setCity)
            .catch(() => console.error("Failed to fetch countries"));

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/country`)
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

    const addCity = async () => {
        if (!city || !file || !selectedCountry) return;

        const imageUrl = await uploadImage();
        if (!imageUrl) return;

        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/city`, {
                method: "POST",
                body: JSON.stringify({ name: newCity, nameEn: newCityEn, imageUrl, countryId: selectedCountry }),
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) throw new Error("Failed to add country");

            const country: City = await res.json();
            setCity([...city, country]);
            setNewCity("");
            setNewCityEn("");
            setFile(null);
        } catch (error) {
            console.error(error);
        }
    };


    const deleteCity = async (id: string) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/city/${id}`, { method: "DELETE" });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to delete country");
            }

            setCity(city.filter((ci) => ci.id !== id));
        } catch (error) {
            console.error("Error deleting country:", error);
        }
    };

    const filteredCities = city.filter((ci) => {
        const country = countries.find((country) => country.id === ci.countryId);
        const countryName = country?.name || "";
        const cityName = ci.name.toLowerCase();
        const search = searchTerm.toLowerCase();
        return cityName.includes(search) || countryName.toLowerCase().includes(search);
    });

    return (
        <div className="p-4">
            <div className="mb-3 text-[#373F47] font-bold">Добьавить город</div>
            <div className="flex gap-2 mb-4">
                <Input value={newCity} onChange={(e) => setNewCity(e.target.value)} placeholder="Название города" />
                <Input value={newCityEn} onChange={(e) => setNewCityEn(e.target.value)} placeholder="Название города En" />
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
                </Select>
                <Button onClick={addCity}>Добавить</Button>
            </div>
            <div className="mt-10 mb-3 text-[#373F47] font-bold">Поиск</div>
            <Input className="mb-5" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Название города или страны" />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Название</TableHead>
                        <TableHead>Картинка</TableHead>
                        <TableHead>Страна</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {isLoading ? (
                        // Если данные еще не загружены, отображаем скелетоны для строк таблицы
                        <>
                            <TableRow>
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[200px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[50px] w-[50px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[150px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[20px]" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[200px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[50px] w-[50px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[150px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[20px]" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[200px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[50px] w-[50px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[150px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-[20px] w-[20px]" />
                                </TableCell>
                            </TableRow>
                        </>
                    ) : (
                        filteredCities.map((ci) => (
                            <TableRow key={ci.id}>
                                <TableCell>{ci.name}</TableCell>
                                <TableCell>
                                    {ci.imageUrl && <Image src={ci.imageUrl} width={100} height={100} alt={ci.name} className="object-contain rounded-md" />}
                                </TableCell>
                                <TableCell>
                                    {ci.countryId && countries.find((country) => country.id === ci.countryId)?.name}
                                </TableCell>
                                <TableCell>
                                    <Trash2 onClick={() => deleteCity(ci.id)} className="cursor-pointer text-[#6C7C8C] hover:text-rose-500" />
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    )
}