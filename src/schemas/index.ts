import { z } from 'zod';

// src/schemas/index.js
const searchDataSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const searchArraySchema = z.array(searchDataSchema);

const searchSchema = z.object({
  query: z
    .string()
    .min(1, '검색어를 입력하세요')
    .max(20, '검색어는 20자 이내로 입력하세요'),
});

export { searchArraySchema, searchSchema };