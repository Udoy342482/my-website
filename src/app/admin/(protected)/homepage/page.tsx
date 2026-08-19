import { getSiteContent } from "@/lib/site-content";
import { HomepageEditor } from "./homepage-editor";

export default async function AdminHomepagePage() {
  const content = await getSiteContent();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-mono text-2xl font-bold text-foreground">
          Homepage content
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Edit the copy and images shown across the homepage, about page, and
          contact page.
        </p>
      </div>
      <HomepageEditor initialContent={content} />
    </div>
  );
}
