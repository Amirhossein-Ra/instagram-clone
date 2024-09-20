import Feed from "@/components/Feed";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="p-3 bg-gray-50 min-h-screen">
      <Header />
      <Feed />
    </div>
  );
}
