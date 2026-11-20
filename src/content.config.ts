import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 每個作品 = src/content/projects/ 底下一個 .md 檔
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),                       // 作品名稱
    summary: z.string(),                     // 列表上的一句話介紹
    category: z.enum(['AI', '網站', 'IoT', '系統', '工具']), // 篩選分類
    tech: z.array(z.string()).default([]),   // 技術標籤
    status: z.enum(['上線中', '開發中', '規劃中']).default('上線中'),
    order: z.number().default(99),           // 排序：數字越小越前面
    featured: z.boolean().default(false),    // 精選作品
    draft: z.boolean().default(false),       // true = 先不顯示
    cover: z.string().optional(),            // 封面圖，例如 /covers/stockmorning.png
    gallery: z.array(z.object({              // 文章頁的作品畫面（可放多張）
      src: z.string(),
      caption: z.string().optional(),
    })).default([]),
    color: z.string().default('#2f5bea'),    // 沒有封面圖時的代表色
    demo: z.string().url().optional(),       // 線上 Demo 網址
    github: z.string().url().optional(),     // 原始碼網址
  }),
});

export const collections = { projects };
