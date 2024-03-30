import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Summary = () => {
  return (
    <main className="w-full h-[100vh] p-10">
      <div className="canvas"></div>

      <div className="w-full h-full">
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="a">Summarise</ToggleGroupItem>
          <ToggleGroupItem value="b">Quiz</ToggleGroupItem>
          <ToggleGroupItem value="c">Multiple Choice</ToggleGroupItem>
          <ToggleGroupItem value="d">Flash Cards</ToggleGroupItem>
        </ToggleGroup>

        
      </div>
    </main>
  );
};

export default Summary;
