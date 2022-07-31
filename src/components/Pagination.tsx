import { useEffect, useState } from "react";

interface PaginationProps {
    setOffset: (value: number) => void;
};

export function Pagination({ setOffset }: PaginationProps) {
    const [page, setPage] = useState(0);

    const PreviousPage = (page: number) => {
        if (page <= 0) return
        setPage(page - 1)
    }

    const NextPage = (page: number) => {
        if (page >= 100) return
        setPage(page + 1)
    }

    useEffect(() => {
        setOffset(page * 60)
    }, [page])

    return (
        <div className="flex items-center justify-center gap-6">
            <button onClick={() => PreviousPage(page)}>Prev...</button>

            <div>
                <span>
                    {page - 2 > 0 && page - 2}
                </span>
                <span>
                    {page - 1 > 0 && page - 1}
                </span>
                <span>
                    {page > 0 && page}
                </span>
            </div>
            <span>
                Page: {page + 1}
            </span>
            <div>
                <span>
                    {page + 2}
                </span>
                <span>
                    {page + 3}
                </span>
                <span>
                    {page + 4}
                </span>
            </div>
            <button onClick={() => NextPage(page)}>Next...</button>
        </div>
    );
};