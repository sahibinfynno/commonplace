export default async function DashboardPage() {
  return (
    <div className="container mx-auto my-10 max-w-3xl px-4 py-2">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">About</h1>

          <p className="text-muted-foreground">
            A simple digital commonplace book for collecting and organizing
            useful ideas, notes, quotes, and links in one place.
          </p>
        </div>

        <div className="space-y-4 text-sm leading-7 text-muted-foreground">
          <p>
            This app helps you save pieces of information you want to revisit
            later — whether it is a short note, an article, a tweet, a resource,
            or a useful link.
          </p>

          <p>
            Inspired by traditional commonplace books, the goal is to create a
            minimal and distraction-free space for storing knowledge and
            thoughts that matter to you.
          </p>

          <p>
            Keep everything searchable, organized, and accessible whenever you
            need it.
          </p>
        </div>
      </div>
    </div>
  );
}
