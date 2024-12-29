import { useEffect, useState } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Search } from '@src/shared/types/searchTypes';
import useDebounce from '@src/hooks/useDebounce';
import { getSearchData } from './getSearchData';




const useGetSearchData = ({
  payload,
}: {
    payload: string;
}): UseQueryResult<Search[]> => {
    const debouncedPayload = useDebounce(payload, 2000);
    const [isDebouncing, setIsDebouncing] = useState(false);

    useEffect(() => {
    if (payload !== debouncedPayload) {
        setIsDebouncing(true);
    } else {
        setIsDebouncing(false);
    }
    }, [payload, debouncedPayload]);

    const result = useQuery<Search[]>({
        queryKey: ['search', payload],
        queryFn: () => getSearchData({ payload }),
        enabled: !!payload, 
    });

    return {
        data: result.data,
        isLoading: isDebouncing || result.isLoading, // 디바운싱 중에도 로딩 상태로 간주
        isError: result.isError,
        isSuccess: result.isSuccess,
    } as UseQueryResult<Search[]> ;
};

export default useGetSearchData;