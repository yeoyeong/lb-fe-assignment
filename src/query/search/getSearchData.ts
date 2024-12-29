export const getSearchData = async ({ payload }: { payload: string }) => {
  try {
    const response = await fetch('/foo/dsata.json', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch search data');
    }

    const data = await response.json();

    // 검색어에 맞는 데이터 필터링
    const filteredData = data.filter((item: { name: string }) =>
      item.name.toLowerCase().includes(payload.toLowerCase())
    );

    return filteredData;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
  