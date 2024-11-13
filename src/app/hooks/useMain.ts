import { useEffect } from "react"

export default function Main(){
    function main(){
        let frutas = ['apple', 'melon', 'avocato']
        const maisFrutas = ['orange', ...frutas]
        frutas = [...maisFrutas]
        //console.log('frutas',frutas)

        console.log('entrou no hook useMain e rodou código')


    }

    useEffect(()=> main(),[])

    return {}
}