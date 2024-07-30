export interface HomePageProps {
  children: any;
}

export default function HomePage(props: HomePageProps) {
  return <div>{props.children}</div>
}