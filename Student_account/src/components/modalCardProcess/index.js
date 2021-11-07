import React from 'react';
import './style.scss';
import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react';

const ModalCardProcess = (props) => {
    return (
        <Modal
            open={props.visible}
            basic >
            <Modal.Content>
                <div
                    style={props.style}
                    className={props.modalClassName}>
                    {props.noBtnClose === false ?    
                    <div className="modal-card-container__i">
                        <i 
                            className="fa fa-times"
                            onClick={props.onClose ? props.onClose : null}>
                        </i>
                    </div> : null}
                    <h3 className="modal-card-container__title">
                        {props.title}
                    </h3>
                    {props.children}
                    <Modal.Actions>
                        {props.noFooter === false ?     
                        <div className={`modal-card-container__btn modal-card-container${props.clsContainer}`}>
                            {props.allBtns ? 
                            
                                props.allBtns.map((item, index) => {
                                    return (
                                        <button 
                                            key={index}
                                            className={`btn modal-card-container__forward ${item.color} ${item.actionButtonsPosition ? item.actionButtonsPosition : ''} ${item.cls}`}
                                            onClick={item.onClick}
                                            disabled={item.disabled}>
                                                {item.text}
                                        </button>
                                    )
                                })
                                : null}
                            </div>
                        : null}
                    </Modal.Actions>
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default ModalCardProcess;