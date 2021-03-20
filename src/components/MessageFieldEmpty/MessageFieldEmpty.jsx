import React, { Component } from "react";

import "./style.scss";

export default () => {
    return (
        <div className="field-chat-list-empty">
            <div className="circle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span className="text-for-chat-empty">Выбери, с кем начнешь общение</span>
        </div>
    );
};