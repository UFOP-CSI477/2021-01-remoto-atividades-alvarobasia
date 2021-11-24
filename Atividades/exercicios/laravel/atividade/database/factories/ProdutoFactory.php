<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProdutoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nome' => $this->faker->name(null),
            'un' => $this->faker->numberBetween(1, 100),
            'descricao' => $this->faker->text,
            'unidademedida' => $this->faker->randomElement(['PÇ', 'KG', 'L', 'M']),
        ];
    }
}
