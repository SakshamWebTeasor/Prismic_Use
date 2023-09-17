import clsx from "clsx"

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

export default function Bounded({
    as: Comp="section",
    className,
    children,
    ...resProps
}: BoundedProps){
    return(
        <Comp className={clsx("px-4 py-10 md:py-14 md:px6 lg:py-16", className)} {...resProps}>
            <div className="mx-auto w-full max-w-6xl">
                {children}
            </div> 
        </Comp>
    )
}