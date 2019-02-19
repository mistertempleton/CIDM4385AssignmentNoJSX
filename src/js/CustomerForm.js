const CustomerForm = (props) => { 
    return React.createElement('div',{className: "form-group"},
        [
            React.createElement('label', 
                                {
                                    htmlFor: "exampleInputEmail1"
                                }, 
                                "Email address"
            ),
            React.createElement('input', 
                                {
                                    className: "form-control",
                                    type: "email",
                                    id: "exampleInputEmail1",
                                    placeholder: "Enter email"
                                },
            ),

            React.createElement('label', 
                                {
                                    htmlFor: "Zip Code"
                                }, 
                                "ZIP code"
            ),

            React.createElement('input', 
                                {
                                    className: "form-control",
                                    type: "ZIP Code",
                                    id: "ZIP",
                                    placeholder: "Where you at?"
                                },
            ),

                    React.createElement("button",
                                    {
                                    },
                                    "Submit"
            ),

            
        ]
    );
};