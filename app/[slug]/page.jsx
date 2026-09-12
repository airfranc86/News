import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '../../data/posts';
import ArticleView from '../components/ArticleView';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return <ArticleView post={post} />;
}
