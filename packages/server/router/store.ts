import { Router, Request, Response } from "express";
import { supabase } from "..";
import { QueryData } from "@supabase/supabase-js";

export const storeRouter = Router();

storeRouter.get("/v1/stores", async (req: Request, res: Response) => {
  const getStoresQuery = supabase.from("store").select("*");
  type getStoresQueryType = QueryData<typeof getStoresQuery>;
  const { data, error } = await getStoresQuery;
  if (error) throw error;
  const stores: getStoresQueryType = data;
  res.status(200).json(stores);
});

storeRouter.post("/v1/store", async (req: Request, res: Response) => {
  const createStoreQuery = supabase.from("store").insert([req.body]).select();
  type createStoreQueryType = QueryData<typeof createStoreQuery>;
  const { data, error } = await createStoreQuery;
  if (error) throw error;
  const newStore: createStoreQueryType = data;
  res.status(200).json(newStore);
});

storeRouter.patch("/v1/store", async (req: Request, res: Response) => {
  const updateField = req.body.field;
  const id = req.body.id;
  const updateStoreQuery = supabase
    .from("store")
    .update(updateField)
    .eq("id", id)
    .select();
  type updateStoreQueryType = QueryData<typeof updateStoreQuery>;
  const { data, error } = await updateStoreQuery;
  if (error) throw error;
  const newStore: updateStoreQueryType = data;
  res.status(200).json(newStore);
});
