import React from "react";

const WidgetList = () =>
    <div>
        <div className="row">
            <div className="col-9">

            </div>
            <button className="col-1 btn btn-success btn-block wbdv-button wbdv-save"
                    onClick="">Save
            </button>

            <div className="custom-control custom-switch switch-large">
                <label className="custom-control-label" htmlFor="customSwitches">Preview</label>
                <input type="checkbox" className="custom-control-input" id="customSwitches"/>

            </div>

        </div>

        <div className="row top-row-heading">
            <a className="col-1">

            </a>

            <a className="heading-widget-title">
                Heading Widget
            </a>

            <a className="col-4">

            </a>
            <i className="fa fa-arrow-up fa-2x"></i>
            <i className="fa fa-arrow-down fa-2x"></i>

            <div className="">
                <select className="form-control wbdv-dropdown-widget">
                    <option>
                        Heading Widget
                    </option>
                    <option>
                        Paragraph Widget
                    </option>
                    <option>
                        List Widget
                    </option>
                    <option>
                        Image Widget
                    </option>
                </select>
            </div>

            <i className="fa fa-times fa-2x close-widget"/>
            <i className="fa fa-2x fa-plus wbdv-new-widget"/>

            <div class ="col-11">
                <input className="form-control wbdv-field"
                       placeholder="Heading Widget"/>
            </div>

            <div class ="col-11">
                <select className="form-control wbdv-field wbdv-dropdown">
                    <option>
                        Heading 1
                    </option>
                    <option>
                        Heading 2
                    </option>
                    <option>
                        Heading 3
                    </option>
                </select>
            </div>

            <div class ="col-11">
                <input className="form-control wbdv-field"
                       placeholder="Widget Name"/>
            </div>

            <div class ="col-11">
                <a className="preview-word">
                    Preview
                </a>
            </div>

            <div class ="col-11">
                <a className="heading-text">
                    Heading Text
                </a>
            </div>

        </div>
    </div>

export default WidgetList