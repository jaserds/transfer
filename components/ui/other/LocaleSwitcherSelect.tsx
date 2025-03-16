'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';

import { ChangeEvent, ReactNode, useTransition } from 'react';
import { Locale, usePathname, useRouter } from '@/i18n/navigation';

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
};

export default function LocaleSwitcherSelect({
    children,
    defaultValue,
    label
}: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value as Locale;
        startTransition(() => {
            router.replace(
                { pathname, ...params },
                { locale: nextLocale }
            );
        });
    }

    return (
        <label
            className={clsx(
                'relative text-gray-400',
                isPending && 'transition-opacity [&:disabled]:opacity-30'
            )}
        >
            <p className="sr-only">{label}</p>
            <select
                className="w-[120px] inline-flex appearance-none bg-transparent py-3 pl-2 pr-2"
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {children}
            </select>
            <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
        </label>
    );
}