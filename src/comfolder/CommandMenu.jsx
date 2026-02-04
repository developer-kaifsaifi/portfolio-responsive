import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react'
import { LuCommand } from "react-icons/lu"

export default function CommandMenu() {

  const [open, setOpen] = useState(false)

  return (<div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)}  className="bg-transparent fill-white w-fit">
        <LuCommand/>
      </Button>
<CommandDialog open={open} onOpenChange={setOpen}>
    <Command className="max-w-sm rounded-lg border bg-[#171717] ">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
</CommandDialog>
  </div>)
}
