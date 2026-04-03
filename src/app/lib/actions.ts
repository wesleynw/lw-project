"use server";

import { db } from "@/db";
import { images, postImages, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function insertImage(
  post_id: number,
  imageBlobUrl: string,
  width: number,
  height: number,
  displayOrder: number = 0,
) {
  const [image] = await db
    .insert(images)
    .values({
      height: height,
      width: width,
      image_blob_url: imageBlobUrl,
    })
    .returning({ image_id: images.image_id });

  await db.insert(postImages).values({
    post_id: post_id,
    image_id: image.image_id,
    display_order: displayOrder,
  });
}

export async function getUsername(user_id: number) {
  const results = await db
    .select()
    .from(users)
    .where(eq(users.user_id, user_id))
    .limit(1);

  return results[0].username;
}
