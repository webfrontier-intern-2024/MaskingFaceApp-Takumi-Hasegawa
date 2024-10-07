import React from "react";
import { Button, Center, Flex } from "@yamada-ui/react";
import { useRouter } from "next/navigation";
import { useRemoveImage } from "../utils/useContext/context/imageContext";
import { useSetBoolean } from "../utils/useContext/context/boolContext";

export const Buttons: React.FC = () => {
  const router = useRouter();
  const rmImage = useRemoveImage().removeImage;
  const { setBoolean: setUploaded, uploaded } = useSetBoolean();

  const handleUpdate = () => {
    setUploaded(true);
    router.push("/pages/uploaded");
  };

  const removeImages = () => {
    rmImage("");
    setUploaded(false);
    router.push("/");
  };

  return (
    <>
      {uploaded ? (
        <>
          <Center>
            <Flex justifyContent={"space-around"}>
              <Button
                marginRight={"3xl"}
                colorScheme="primary"
                onClick={() => removeImages}>
                画像を削除
              </Button>
              <Button
                colorScheme="primary"
                onClick={() => router.push("/pages/masked")}>
                画像をマスク
              </Button>
            </Flex>
          </Center>
        </>
      ) : (
        <>
          <Center>
            <Flex justifyContent={"space-around"}>
              <Button
                marginRight={"3xl"}
                colorScheme="primary"
                onClick={removeImages}>
                画像を削除
              </Button>
              <Button colorScheme="primary" onClick={() => handleUpdate}>
                画像を送信
              </Button>
            </Flex>
          </Center>
        </>
      )}
    </>
  );
};
