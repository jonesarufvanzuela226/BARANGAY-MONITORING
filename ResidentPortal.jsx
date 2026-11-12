// src/components/ResidentPortal.jsx
import React, { useState } from 'react';

export default function ResidentPortal({ currentHousehold, onAddMember }) {
    const [formData, setFormData] = useState({
        name: '',
        relationship: 'Spouse',
        age: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.age) return;

        onAddMember(currentHousehold.id, {
            id: Date.now().toString(),
            name: formData.name,
            relationship: formData.relationship,
            age: parseInt(formData.age),
            status: 'Pending Verification'
        });

        setFormData({ name: '', relationship: 'Spouse', age: '' });
    };

    return (
        <div className="portal-container">
            <h3>Welcome, {currentHousehold.headName}</h3>
            <p>Address: {currentHousehold.purok}</p>

            {/* Form for resident input */}
            <form onSubmit={handleSubmit} className="add-member-form">
                <h4>Input New Family Member</h4>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maria Dela Cruz"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Relationship</label>
                    <select
                        value={formData.relationship}
                        onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                    >
                        <option value="Spouse">Spouse</option>
                        <option value="Child">Child</option>
                        <option value="Parent">Parent</option>
                        <option value="Sibling">Sibling</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="e.g. 12"
                        required
                    />
                </div>

                <button type="submit" className="btn-primary">+ Register Family Member</button>
            </form>
        </div>
    );
}