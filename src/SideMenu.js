import TagButton from "./TagButton";

export default function SideMenu() {
  return (
    <div style={{ border: "solid teal 5px" }}>
      <TagButton name='جديد'>
        <span>🤗🤗🙂</span>
      </TagButton>
      <TagButton name='الأكثر قراءة'>
        <img></img>
      </TagButton>
      <TagButton name='مقالات مميزة'>
        <div>😊😊😊</div>
      </TagButton>
    </div>
  );
}
