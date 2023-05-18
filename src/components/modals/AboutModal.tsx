import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          Le code de base c'est ici.
        </a>
        <br /> Merci également à Achraf Laamoum de m'avoir fourni une première
        version adaptée du code.
      </p>
    </BaseModal>
  )
}
