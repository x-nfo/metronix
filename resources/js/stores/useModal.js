import { Modal } from 'bootstrap';

export function useModal(modalId) {
    return new Modal(modalId, {
        keyboard: false,
        backdrop: 'static',
    });
}
