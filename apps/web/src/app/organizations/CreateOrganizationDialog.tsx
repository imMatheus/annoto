"use client"

import React, { useState } from "react"
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input, Stack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { useMutation } from "@tanstack/react-query"
import { createOrganizationAction } from "./actions"
import { useRouter } from "next/navigation"
import { toaster } from "@/components/ui/toaster"

interface CreateOrganizationDialogProps {}

export const CreateOrganizationDialog: React.FC<
  CreateOrganizationDialogProps
> = ({}) => {
  const router = useRouter()

  const [name, setName] = useState("")
  const [open, setOpen] = useState(false)
  const { mutate: createOrganization, isPending } = useMutation({
    mutationFn: createOrganizationAction,
    onSuccess: (data) => {
      if (data) {
        setOpen(false)
        toaster.create({
          title: "Organization created",
          type: "success",
        })
        router.push(`/organizations/${data?.id}`)
      }
    },
  })

  return (
    <DialogRoot
      placement="center"
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DialogTrigger asChild>
        <Button variant="surface" size="sm">
          Open Dialog
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Organization</DialogTitle>
          <DialogDescription>
            From here you can create projects and manage your organization.
          </DialogDescription>
        </DialogHeader>
        <DialogBody pb="4">
          <Stack gap="4">
            <Field label="Organization Name">
              <Input
                placeholder="Organization Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>
          </Stack>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button onClick={() => createOrganization(name)} loading={isPending}>
            Save
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}
