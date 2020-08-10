export const isRecentUrl = async (
  db: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>,
  url: string
): Promise<boolean> => {
  const snapshot = await db.orderBy('createdAt', 'desc').limit(5).get()
  const filterMatchingUrl = snapshot.docs.filter((doc) => doc.data().url === url)
  return filterMatchingUrl.length >= 1
}
