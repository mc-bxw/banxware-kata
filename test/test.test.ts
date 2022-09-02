test('dummy test', () => {
  const parseString = (): string => {}

  it('parses the string', () => {
    type direction = 'N' | 'S' | 'E' | 'W'
    type move = 'L' | 'R' | 'M'
    type moveSet = move[]
    type point = { x: number, y: number} 
    type parsedData = 

    const input: string = `5 5
    1 2 N
    LMLMLMLMM
    3 3 E
    MMRMMRMRRM`

    const output = {
      sizeOfMap: { x: 5, y: 5 },
      rovers: [
        {
          location: { x: 1, y: 1 },
          direction: 'N',
          moveSet: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
        },
        {
          location: { x: 3, y: 3 },
          direction: 'E',
          moveSet: ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'],
        },
      ],
    }

    expect(parseString(input)).toBe(output)
  })
})
