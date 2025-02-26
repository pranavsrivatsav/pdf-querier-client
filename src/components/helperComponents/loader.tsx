import React from 'react';
import loadingRing from '../../assets/loading-ring.svg';
import Modal from './Modal';

const Loader: React.FC = () => {
    return (
        <Modal isOpen={true} onClose={() => {}} size="fit">
            <div style={{ textAlign: 'center' }}>
                <img src={loadingRing} alt="Loading..." />
                <p>Loading...</p>
            </div>
        </Modal>
    );
};

export default Loader;
