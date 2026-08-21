import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dragonbarber.ru',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    // Якоря вида /#price и /#contacts убраны: это не отдельные страницы,
    // поисковикdsdsdddddи не индексируют фрагменты URL как самостоятельные адреса,
    // и такие записи в sitemap.xml не несут пользы, а иногда трактуются
    // как некачественные/дублирующие записи.

    {
      url: 'https://dragonbarber.ru/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}