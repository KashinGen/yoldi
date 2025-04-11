import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/shared/ui";

export default function Home() {
  return (
    <>
    <Button disabled>Тест</Button>
    <Button disabled variant={"outline"}>Тест</Button>
    </>
  );
}
