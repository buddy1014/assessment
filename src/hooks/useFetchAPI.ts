import { useState, useEffect, useCallback } from "react";

import axios from "axios";

import { IImage } from "../types/model";

import { API_URL } from "../helpers/constants";

export const useFetchAPI: () => { data: IImage[]; loading: boolean } = () => {
  const [data, setData] = useState<IImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(API_URL);
      setData(data.data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading };
};
