"use client"

import { IconSearch, IconX } from "@intentui/icons"
import type { SearchFieldProps as SearchFieldPrimitiveProps } from "react-aria-components"
import { Button, SearchField as SearchFieldPrimitive } from "react-aria-components"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { Description, FieldError, FieldGroup, type FieldProps, Input, Label } from "./field"
import { Loader } from "./loader"

interface SearchFieldProps extends SearchFieldPrimitiveProps, FieldProps {
  isPending?: boolean
}

const SearchField = ({
  children,
  className,
  placeholder,
  label,
  description,
  errorMessage,
  isPending,
  ...props
}: SearchFieldProps) => {
  return (
    <SearchFieldPrimitive
      aria-label={placeholder ?? props["aria-label"] ?? "Search..."}
      {...props}
      className={composeTailwindRenderProps(
        className,
        "group/search-field relative flex flex-col gap-y-1 *:data-[slot=label]:font-medium",
      )}
    >
      {(values) => (
        <>
          {typeof children === "function" ? (
            children(values)
          ) : children ? (
            children
          ) : (
            <FieldGroup>
              {label && <Label>{label}</Label>}
              {isPending ? <Loader variant="spin" /> : <IconSearch />}
              <Input placeholder={placeholder ?? "Search..."} />

              <Button className="grid place-content-center pressed:text-fg text-muted-fg hover:text-fg group-empty/search-field:invisible">
                <IconX />
              </Button>
              {description && <Description>{description}</Description>}
              <FieldError>{errorMessage}</FieldError>
            </FieldGroup>
          )}
        </>
      )}
    </SearchFieldPrimitive>
  )
}

export type { SearchFieldProps }
export { SearchField }
