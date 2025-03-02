import { useEffect, useState } from 'react';

type Data<T> = T | null;
type ErrorType = Error | null;

interface Props<T> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
}

export const useFetch = <T>(url: string, refreshKey: number): Props<T> => {
    const [data, setData] = useState<Data<T>>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType>(null);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    signal: controller.signal
                });
                if (!response.ok)
                    throw new Error(`HTTPS error! Status: ${response.status}`);

                const jsonData: T = await response.json();
                setData(jsonData);
                setError(null);
                console.log(jsonData);
            } catch (error) {
                setError(error as Error);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, [url, refreshKey]);

    return { data, loading, error };
};
