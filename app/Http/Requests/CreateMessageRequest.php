<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateMessageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */

    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'nullable|max:30',
            'email' => 'nullable|email|max:129',
            'phone' => 'nullable|max:16',
            'title' => 'required|max:120',
            'message' => 'required|max:700'
        ];
    }

    public function messages()
    {
        return [
            'name.max' => trans('validation.name.max'),
            'email.email' => trans('validation.email.email'),
            'email.max' => trans('validation.email.max'),
            'phone.max' => trans('validation.phone.max'),
            'title.required' => trans('validation.title.required'),
            'title.max' => trans('validation.title.max'),
            'message.required' => trans('validation.message.required'),
            'message.max' => trans('validation.message.max'),
        ];
    }
}
