import { Flex, Box, Button } from '@chakra-ui/react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {

    return (
        <Flex px={'4'} align={'center'} height={'6vh'} bg={'yellow.200'}>
             <Button className={styles.navButton}>Home</Button>
             <Button className={styles.navButton}>About Us</Button>

        </Flex>
    )
}
