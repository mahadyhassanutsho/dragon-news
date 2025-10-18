import { useParams } from "react-router";

export default function NewsByCategoryPage() {
  const { id } = useParams();

  return <div>NewsByCategory - {id}</div>;
}
