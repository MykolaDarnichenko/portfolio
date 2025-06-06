// composables/useMarkdownContent.ts
import { useRoute, useI18n } from '#imports'

export function useMarkdownContent(collectionName: string) {
  const route = useRoute()
  const { locale } = useI18n()

  const rawPath = route.path.replace(/^\/(ua|en)/, '') || '/'
  const contentPath = rawPath // Например: /posts/design

  const data = ref<any>(null)

  const fetchPost = async () => {
    // queryCollection().path().first() возвращает Promise — вызываем напрямую
    data.value = await queryCollection(collectionName).path(contentPath).first()
  }

  // Загружаем при инициализации
  onMounted(fetchPost)

  // Загружаем заново при смене языка
  watch(locale, fetchPost)

  const getField = (field: string): string => {
    if (!data.value) return ''
    const uaField = `${field}Ua`
    return locale.value === 'ua' && uaField in data.value
      ? data.value[uaField]
      : data.value[field]
  }

  return { data, getField }
}
