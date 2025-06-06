export default defineNuxtRouteMiddleware((to) => {
  const { $i18n } = useNuxtApp()
  const localePath = useLocalePath()

  // Извлекаем текущий язык из маршрута
  const currentLocale = $i18n.locale

  // Проверяем, начинается ли путь с /en или /ua и т.д.
  const hasLocalePrefix = to.path.startsWith(`/${currentLocale}/`) || to.path === `/${currentLocale}`

  if (!hasLocalePrefix) {
    // Строим путь с текущим языком
    const redirectedPath = localePath(to.fullPath)

    // Предотвращаем бесконечный редирект (на всякий случай)
    if (redirectedPath !== to.fullPath) {
      return navigateTo(redirectedPath)
    }
  }
})