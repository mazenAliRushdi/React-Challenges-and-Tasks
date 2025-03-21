import TagButton from "./TagButton";

export default function SideMenu() {
  const btns = [
    {
      id: 1,
      title: 'آخر المقالات',
      child: (
        <span>😊😊😉</span>
      )
    },
    {
      id: 2,
      title: 'الأكثر قراءة'
    },
    {
      id: 3,
      title: 'مميز'
    }
  ];

  const btnsList = btns.map((btn) => {
    return (
      <TagButton key={btn.id} title={btn.title}>
        {btn.child}
      </TagButton>
    )
  })
  return (
    <div style={{ border: "solid teal 5px" }}>
      {btnsList}
    </div>
  );
}
