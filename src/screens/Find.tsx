import { Heading, Text, VStack } from "native-base";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

export function Find(){
    return(
        <VStack flex={1} bgColor="gray.900">
            <Header title="Buscar por código" showBackButton />
            <VStack mt={8} mx={5} alignItems="center">
                <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
                    Encontrar um bolão através de {'\n'} seu código único
                </Heading>
                
                <Input
                    mb={2}
                    placeholder="Qual o código do bolão?"
                />
                <Button 
                title="BUSCAR MEU BOLÃO"
                />
                <Text color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4}>
                    Após criar seu bolão, você receberá um código único
                    que poderá usar para convidar outras pessoas
                </Text>
           </VStack>
        </VStack>
    )
}