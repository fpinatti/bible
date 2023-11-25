import { render } from "@testing-library/react"
import BookButton from "../BookButton.component"
import { BrowserRouter } from "react-router-dom"

describe(BookButton, () => {
    test('test 1', () => {
        // arrange
        const wrapper = render(<BrowserRouter>
            <BookButton id={1} name="test name" />
        </BrowserRouter>)
        // act/assert
        expect(wrapper).toMatchSnapshot()
    })
})