import { Button} from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react"

type Props = {
    children: ReactNode;
    disabled?:boolean;
    loading?: boolean;
    onClick: () =>void;
}
export const PrimaryButton:FC<Props> = memo((props) => {
    const {children,onClick,disabled = false, loading = false} = props;
    return(
        <Button bg="teal.400" color="white" _hover={{opacity:0.8} } isLoading={loading} disabled = {disabled || loading} onClick={onClick}>
            {children}
        </Button>
    )
});