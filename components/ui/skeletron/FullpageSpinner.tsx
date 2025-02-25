import { Spinner } from "./Spinner";

export function FullPageSpinner() {
    return (
        <div className="inset-0 flex justify-center items-center absolute bg-[#fff]">
            <Spinner />
        </div>
    )
}