"use client"

// 01:56:00 - 01:57:30 - ROUTING LOGIC EXPLANATION

import { useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => 
{
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() =>
  {
    if (!isOpen)
    {
      onOpen()
    }
  }, [isOpen, onOpen])

  return null
}

export default SetupPage;